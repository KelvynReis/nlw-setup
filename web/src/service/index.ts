import { api } from "../lib/axios";

export const handdleSummaryTable = async () => {
  try {
    const { data } = await api.get("/summary");
    return data;
  } catch (error) {
    alert("Erro ao carregar dados");
  }
};

type HanddleCreateNewHabitProps = {
  title: string;
  weekDays: number[];
};

export const HanddleCreateNewHabit = async (
  data: HanddleCreateNewHabitProps
) => {
  try {
    const response = await api.post("/habits", {
      title: data.title,
      weekDays: data.weekDays,
    });
    return response;
  } catch (error) {
    alert("Erro ao criar novo hábito");
  }
};
