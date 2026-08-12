// Official card dimensions for 300 DPI
export const CARD_WIDTH = 750;
export const CARD_HEIGHT = 1050;

export const NAME_BOX = {
    x: CARD_WIDTH * 0.1, 
    y: CARD_HEIGHT * 0.095
}

export const ART_BOX = {
    x: CARD_WIDTH * 0.085,
    y: CARD_HEIGHT * 0.12,
    width: CARD_WIDTH * 0.83,
    height: CARD_HEIGHT * 0.435,
};

export const TYPE_BOX = {
    x: CARD_WIDTH * 0.1, 
    y: CARD_HEIGHT * 0.6, 
}

export const DESCRIPTION_BOX = {
    x: CARD_WIDTH * 0.1, 
    y: CARD_HEIGHT * 0.66, 
    maxW: CARD_WIDTH * 0.8, 
    lineH: 35
}

export const ALT_BOX = {
    x: CARD_WIDTH * 0.1, 
    maxW: CARD_WIDTH * 0.8, 
    lineH: 30, 
    font: "italic 20px TimesNewRoman"
}

export interface CardDrawOptions {
    templateImage: HTMLImageElement;
    manaIcons: Record<string, HTMLImageElement>;
    userImage: HTMLImageElement | null;
    cardName: string;
    manaCost: string;
    subType: string;
    type: string;
    superType: string;
    description: string;
    alt: string;
}

export function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.crossOrigin = "anonymous"; // This is important for CORS issues
        img.onload = () => resolve(img);
        img.onerror = (err) => reject(err);
        img.src = src;
    });
}

export function drawManaCost(ctx: CanvasRenderingContext2D, manaIcons: Record<string, HTMLImageElement>, manaCost: string, rightEdgeX: number, y: number) {
    ctx.save(); // To stop the text align from affecting types and description.

    // Draw mana symbols in a row, starting from the given x, y coordinates
    const radius = 18;
    const gap = 4;

    const genericNum = manaCost.match(/\d+/)?.[0] ?? '';
    const symbols = manaCost.toUpperCase().replace(/[^WUBRGX]/g, "").split("");

    if (genericNum) {symbols.unshift(genericNum)} // Adds generic mana cost to front if available

    const totalWidth = symbols.length * (radius * 2 + gap) - gap;

    let cursorX = rightEdgeX - totalWidth;

    for (const char of symbols) {
        const icon = manaIcons[char];

        if (icon) {
            ctx.drawImage(icon, cursorX, y - radius, radius * 2, radius * 2);
        } else {

            ctx.drawImage(manaIcons["blank"], cursorX, y - radius, radius * 2, radius * 2);

            ctx.fillStyle = "black";
            ctx.font = "bold 35px TimesNewRoman";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(char, cursorX + radius, y + 1);
        }

        cursorX += radius * 2 + gap; // Move cursor for the next symbol
    }
    ctx.restore();
}

export function drawText(ctx: CanvasRenderingContext2D, text: string, x: number, y: number, maxWidth: number, lineHeight: number, font: string = "35px TimesNewRoman") {
    // Split the text into words and filters out any empty strings
    const words = text.split(/\s+/).filter(Boolean); 
    ctx.font = font;

    let line = '';
    let cursorY = y;


    for (const word of words) {
        // Combine the current line with the new word if the line isn't empty
        const testLine = line ? `${line} ${word}` : word; 

        const {width} = ctx.measureText(testLine);

        if (width > maxWidth && line) {
            ctx.fillText(line, x, cursorY);
            line = word;
            cursorY += lineHeight;
        } else {
            line = testLine;
        }
    }

    if (line) {
        ctx.fillText(line, x, cursorY);
        cursorY += lineHeight;
    }

    return cursorY;
}

function drawImageCover(
    ctx: CanvasRenderingContext2D,
    img: HTMLImageElement,
    dx: number,
    dy: number,
    dWidth: number,
    dHeight: number
) {
    const imgRatio = img.width / img.height;
    const boxRatio = dWidth / dHeight;

    let sx = 0, sy = 0, sWidth = img.width, sHeight = img.height;

    if (imgRatio > boxRatio) {
        sWidth = img.height * boxRatio;      // image wider than box: crop left/right
        sx = (img.width - sWidth) / 2;
    } else {
        sHeight = img.width / boxRatio;      // image taller than box: crop top/bottom
        sy = (img.height - sHeight) / 2;
    }

    ctx.save();
    ctx.beginPath();
    ctx.rect(dx, dy, dWidth, dHeight);
    ctx.clip();
    ctx.drawImage(img, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight);
    ctx.restore();
}

export function drawMTGCard(ctx: CanvasRenderingContext2D, canvas: HTMLCanvasElement, options: CardDrawOptions) {

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.drawImage(options.templateImage, 0, 0, CARD_WIDTH, CARD_HEIGHT);

    if (options.userImage) {
        drawImageCover(ctx, options.userImage, ART_BOX.x, ART_BOX.y, ART_BOX.width, ART_BOX.height);
    }

    ctx.fillStyle = "#000000";
    ctx.textAlign = "left";
    ctx.textBaseline = "alphabetic";

    ctx.font = "bold 36px system-ui, TimesNewRoman";
    ctx.fillText(options.cardName || "Card Name", NAME_BOX.x, NAME_BOX.y);

    drawManaCost(ctx, options.manaIcons, options.manaCost, CARD_WIDTH * 0.91, CARD_HEIGHT * 0.084);

    const typeParts = [options.superType, options.type].filter(Boolean);
    const typeLine = options.subType
        ? `${typeParts.join(" ")} — ${options.subType}`
        : typeParts.join(" ");

    ctx.font = "bold 26px system-ui, TimesNewRoman";
    ctx.fillText(typeLine || "Supertype Type — Subtype", TYPE_BOX.x, TYPE_BOX.y);

    const altY = drawText(
        ctx,
        options.description,
        DESCRIPTION_BOX.x,
        DESCRIPTION_BOX.y,
        DESCRIPTION_BOX.maxW,
        DESCRIPTION_BOX.lineH
    );

    if (options.alt) {
        drawText(
            ctx, 
            options.alt, 
            ALT_BOX.x, 
            altY, 
            ALT_BOX.maxW, 
            ALT_BOX.lineH, 
            ALT_BOX.font
        );
    }

    return canvas;
}