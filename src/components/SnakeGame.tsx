"use client";

import { useEffect, useRef, useState, useCallback } from "react";

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Position = { x: number; y: number };
type GameState = "PLAYING" | "GAME_OVER";

export default function SnakeGame() {
  const [isMobile, setIsMobile] = useState(false);
  const [snake, setSnake] = useState<Position[]>([
    { x: 10, y: 10 },
    { x: 9, y: 10 },
    { x: 8, y: 10 }
  ]);
  const [food, setFood] = useState<Position>({ x: 5, y: 5 });
  const [direction, setDirection] = useState<Direction>("RIGHT");
  const [gameState, setGameState] = useState<GameState>("PLAYING");
  const [score, setScore] = useState(0);
  const gridSize = 20;
  const gameSpeed = 150;
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const touchStart = useRef<{ x: number; y: number } | null>(null);

  const generateFood = useCallback((): Position => {
    const x = Math.floor(Math.random() * (gridSize - 1));
    const y = Math.floor(Math.random() * (gridSize - 1));
    const isOnSnake = snake.some(segment => segment.x === x && segment.y === y);
    return isOnSnake ? generateFood() : { x, y };
  }, [snake]);

  const resetGame = () => {
    setSnake([
      { x: 10, y: 10 },
      { x: 9, y: 10 },
      { x: 8, y: 10 }
    ]);
    setFood(generateFood());
    setDirection("RIGHT");
    setGameState("PLAYING");
    setScore(0);
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(/iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isMobile) return;

      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [direction, isMobile]);

  // 🎯 Add swipe detection for mobile
  useEffect(() => {
    if (!isMobile) return;

    const handleTouchStart = (e: TouchEvent) => {
      const touch = e.touches[0];
      touchStart.current = { x: touch.clientX, y: touch.clientY };
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!touchStart.current) return;

      const touch = e.touches[0];
      const dx = touch.clientX - touchStart.current.x;
      const dy = touch.clientY - touchStart.current.y;

      if (Math.abs(dx) > Math.abs(dy)) {
        if (dx > 10 && direction !== "LEFT") setDirection("RIGHT");
        if (dx < -10 && direction !== "RIGHT") setDirection("LEFT");
      } else {
        if (dy > 10 && direction !== "UP") setDirection("DOWN");
        if (dy < -10 && direction !== "DOWN") setDirection("UP");
      }

      touchStart.current = null;
    };

    window.addEventListener("touchstart", handleTouchStart);
    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, [direction, isMobile]);

  useEffect(() => {
    if (gameState === "GAME_OVER") return;

    const moveSnake = () => {
      const head = { ...snake[0] };

      switch (direction) {
        case "UP":
          head.y -= 1;
          break;
        case "DOWN":
          head.y += 1;
          break;
        case "LEFT":
          head.x -= 1;
          break;
        case "RIGHT":
          head.x += 1;
          break;
      }

      head.x = (head.x + gridSize) % gridSize;
      head.y = (head.y + gridSize) % gridSize;

      if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameState("GAME_OVER");
        return;
      }

      const newSnake = [head, ...snake];
      if (head.x === food.x && head.y === food.y) {
        setFood(generateFood());
        setScore(prev => prev + 1);
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const interval = setInterval(moveSnake, gameSpeed);
    return () => clearInterval(interval);
  }, [snake, direction, food, gameState, generateFood]);

  useEffect(() => {
    if (!canvasRef.current || gameState === "GAME_OVER") return;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "green";
    snake.forEach(segment => ctx.fillRect(segment.x * 15, segment.y * 15, 14, 14));

    ctx.fillStyle = "red";
    ctx.fillRect(food.x * 15, food.y * 15, 14, 14);
  }, [snake, food, gameState]);

  return (
    <>
      <div className="mt-6 relative touch-none">
        <canvas
          ref={canvasRef}
          width={300}
          height={300}
          className="border border-muted-foreground bg-background rounded"
        />
        {gameState === "GAME_OVER" && (
          <div className="absolute inset-0 bg-background/80 flex flex-col items-center justify-center">
            <p className="text-xl font-bold text-destructive">Game Over!</p>
            <p className="text-md text-muted-foreground">Score: {score}</p>
            <button
              onClick={resetGame}
              className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded hover:bg-primary/90"
            >
              Play Again
            </button>
          </div>
        )}
      </div>

      <div className="mt-4 text-sm text-muted-foreground text-center">
        <p>Score: {score}</p>
        <p className="mt-2">
          {isMobile ? "Swipe to move" : "Use arrow keys to move"}
        </p>
      </div>
    </>
  );
}
