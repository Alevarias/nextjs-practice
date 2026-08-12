"use client";

import { useRef, useEffect, useState, useCallback, ChangeEvent, forwardRef, useImperativeHandle } from "react";
import {CARD_WIDTH, CARD_HEIGHT, drawMTGCard, loadImage} from "@/lib/mtg-card-canvas";

interface MTGCardPreviewProps {
  cardName: string;
  manaCost: string;
  superType: string;
  type: string;
  subType: string;
  description: string;
  alt: string;
  imageFile: File | null;
}

export interface MTGCardPreviewHandle {
  download: (filename?: string) => void;
}

const MTGCardPreview = forwardRef<MTGCardPreviewHandle, MTGCardPreviewProps>(function MTGCardPreview(props, ref) {
  // We'll use canvas
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [templateImg, setTemplateImg] = useState<HTMLImageElement | null>(null);
  const [manaIcons, setManaIcons] = useState<Record<string, HTMLImageElement>>({});
  const [userImg, setUserImg] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    loadImage("/blank-mtg-card.png").then(setTemplateImg)
  }, []);

  useEffect(() => {
    const symbols = ["W", "U", "B", "R", "G", "X", "blank"];

    Promise.all(symbols.map((s) => loadImage(`/mana-icons/${s}.svg`)))
      .then((images) => {
        const map = Object.fromEntries(symbols.map((s, i) => [s, images[i]]));
        setManaIcons(map);
      });
  }, []);

  useEffect(() => {
    if (!props.imageFile) {
      setUserImg(null);
      return;
    }

    const objectUrl = URL.createObjectURL(props.imageFile);
    let cancelled = false;

    loadImage(objectUrl).then((img) => {
      if (!cancelled) setUserImg(img);
    });

    return () => {
      cancelled = true;
      URL.revokeObjectURL(objectUrl);
    };

  }, [props.imageFile]);

  useEffect(() => {
    if (!templateImg || !canvasRef.current) return;
    const ctx = canvasRef.current.getContext("2d");

    if (!ctx) return;

    drawMTGCard(ctx, canvasRef.current, {
      templateImage: templateImg, 
      manaIcons: manaIcons,
      userImage: userImg, 
      cardName: props.cardName, 
      manaCost: props.manaCost, 
      subType: props.subType, 
      type: props.type, 
      superType: props.superType, 
      description: props.description,
      alt: props.alt,
    });
  }, [templateImg, userImg, props.cardName, props.manaCost, props.subType, props.type, props.superType, props.description, props.alt]);

  useImperativeHandle(ref, () => ({
    download: (filename = "card.png") => {
      const canvas = canvasRef.current;
      if (!canvas) return;

      const link = document.createElement("a");
      link.download = filename;
      link.href = canvas.toDataURL("image/png");
      link.click();
    },
  }));

  return (
    <div className="p-4 w-full max-w-102">
      <canvas ref={canvasRef} width={CARD_WIDTH} height={CARD_HEIGHT} className="w-full h-auto rounded-lg border-black border-2"/>
    </div>
  );
});

export default MTGCardPreview;