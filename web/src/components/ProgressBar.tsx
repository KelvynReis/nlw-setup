import React from "react";

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar = ({ progress }: ProgressBarProps) => {
  return (
    <div className="h-3 rounded-r-xl bg-zinc-700 w-full mt-4">
      <div
        aria-label="Progresso de hábitos completados nesse dia"
        role="progressbar"
        aria-valuenow={progress}
        className="h-3 rounded-xl bg-violet-600"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
};
