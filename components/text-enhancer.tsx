"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { CopyIcon, CheckIcon, WandSparklesIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export default function TextEnhancer() {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const [isEnhanced, setIsEnhanced] = useState(false);

  const handleEnhance = async () => {
    if (!text.trim()) return;

    setIsLoading(true);

    try {
      // Create a fade-out effect
      const originalText = text;
      let currentText = originalText;
      const fadeOutInterval = setInterval(() => {
        if (currentText.length > 0) {
          currentText = currentText.slice(0, -1);
          setText(currentText);
        } else {
          clearInterval(fadeOutInterval);
        }
      }, 20);

      // Call the API instead of directly calling the server action
      const response = await fetch("/api/enhance", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: originalText }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || "Failed to enhance text");

      // Clear any remaining interval
      clearInterval(fadeOutInterval);
      setText("");

      // Type in the enhanced text character by character
      let displayedText = "";
      const typeInterval = setInterval(() => {
        if (displayedText.length < data.enhancedText.length) {
          displayedText = data.enhancedText.slice(0, displayedText.length + 1);
          setText(displayedText);
        } else {
          clearInterval(typeInterval);
          setIsEnhanced(true);
        }
      }, 15);
    } catch (error) {
      console.error("Error enhancing text:", error);
      setText("An error occurred while enhancing your text. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (error) {
      console.error("Failed to copy text:", error);
    }
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
    if (isEnhanced) {
      setIsEnhanced(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="relative">
        <Textarea
          placeholder="Enter text"
          value={text}
          onChange={handleTextChange}
          className="min-h-[200px] resize-y p-4 pr-12 text-base"
          disabled={isLoading}
        />
        {isEnhanced && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2"
            onClick={handleCopy}
            aria-label="Copy to clipboard"
          >
            {isCopied ? (
              <CheckIcon className="h-4 w-4 text-green-500" />
            ) : (
              <CopyIcon className="h-4 w-4" />
            )}
          </Button>
        )}
      </div>

      <Button
        onClick={handleEnhance}
        disabled={isLoading || !text.trim()}
        className={cn("w-full transition-all", isLoading && "opacity-70")}
      >
        <WandSparklesIcon className="mr-2 h-4 w-4" />
        {isLoading ? "Enhancing..." : "Magic"}
      </Button>
    </div>
  );
}
