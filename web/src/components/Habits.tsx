interface HabitsProps {
  completed: number;
}

export const Habits = (props: HabitsProps) => {
  return (
    <div className="bg-zinc-900 w-10 h-10 text-white flex align-center justify-center rounded m-2">
      {props.completed}
    </div>
  );
};
