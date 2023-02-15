import React, { useState, FormEvent } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { useFormik } from "formik";
import { Check } from "phosphor-react";
import { useMutation } from "react-query";
import { HanddleCreateNewHabit } from "../service";

const availableWeekDays = [
  "Domingo",
  "Segunda-feira",
  "Terça-feira",
  "Quarta-feira",
  "Quinta-feira",
  "Sexta-feira",
  "Sábado",
];

const useCreateNewHabitMutation = () => {
  return useMutation((values: any) => {
    return HanddleCreateNewHabit(values);
  });
};

export const NewHabitForm = () => {
  const [weekDays, setWeekDays] = useState<number[]>([]);

  const { mutate } = useCreateNewHabitMutation();
  const formik = useFormik({
    initialValues: {
      title: "",
      weekDays: [],
    },
    onSubmit: (values) => {
      // createNewHabit(values);
      mutate(values, {
        onSuccess: () => {
          alert("Hábito criado com sucesso!");
        },
        onError: (response) => {
          alert("Erro ao criar hábito!");
          console.log(response);
        },
      });
    },
  });

  function handleToggleWeekDay(weekDay: number) {
    if (weekDays.includes(weekDay)) {
      const weekDaysWithRemovedOne = weekDays.filter((day) => day !== weekDay);
      setWeekDays(weekDaysWithRemovedOne);
      formik.setFieldValue("weekDays", [...weekDaysWithRemovedOne]);
    } else {
      const weekDaysWithAddedOne = [...weekDays, weekDay];
      setWeekDays(weekDaysWithAddedOne);
      formik.setFieldValue("weekDays", [...weekDaysWithAddedOne]);
    }
  }

  async function createNewHabit(values: any) {
    if (!values.title || values.weekDays.length === 0) {
      return;
    }

    await mutate(values, {
      onSuccess: () => {
        alert("Hábito criado com sucesso!");
      },
      onError: (response) => {
        alert("Erro ao criar hábito!");
        console.log(response);
      },
    });

    setWeekDays([]);
  }

  return (
    <form onSubmit={formik.handleSubmit} className="w-full flex flex-col mt-6">
      <label htmlFor="title" className="font-semibold leading-tight">
        Qual seu comprometimento?
      </label>

      <input
        type="text"
        id="title"
        name="title"
        placeholder="ex.: Exercícios, dormir bem, etc..."
        className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
        onChange={formik.handleChange}
        value={formik.values.title}
        autoFocus
      />

      <label htmlFor="" className="font-semibold leading-tight mt-4">
        Qual a recorrência?
      </label>

      <div className="flex flex-col gap-2 mt-3">
        {availableWeekDays.map((weekDay, index) => (
          <Checkbox.Root
            key={weekDay}
            className="flex items-center gap-3 group focus:outline-none"
            checked={weekDays.includes(index)}
            onCheckedChange={() => handleToggleWeekDay(index)}
          >
            <div className="h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-50 transition-colors group-focus:ring-2 group-focus:ring-violet-600 group-focus:ring-offset-2 group-focus:ring-offset-background">
              <Checkbox.Indicator>
                <Check size={20} className="text-white " />
              </Checkbox.Indicator>
            </div>

            <span className="text-white leading-tight">{weekDay}</span>
          </Checkbox.Root>
        ))}
      </div>

      <button
        type="submit"
        className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500 transition-colors focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 focus:ring-offset-zinc-900"
      >
        <Check size={20} weight="bold" />
        Confirmar
      </button>
    </form>
  );
};
