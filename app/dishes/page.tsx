"use client";

import "@ant-design/v5-patch-for-react-19";
import Button from "antd/es/button/button";
import { Dishes } from "../components/Dishes";
import { useEffect, useState } from "react";
import {
  createDish,
  deleteDish,
  DishRequest,
  getAllDishes,
  updateDish,
} from "../services/dishes";
import Title from "antd/es/typography/Title";
import { CreateUpdateDish, Mode } from "../components/CreateUpdateDish";
import { useTranslation } from "react-i18next";

export default function DishesPage() {
  const { t } = useTranslation();

  const defaultValues = {
    title: "",
    description: "",
    price: 0,
    weight: 0,
  } as Dish;

  const [values, setValues] = useState<Dish>(defaultValues);
  const [dishes, setDishes] = useState<Dish[]>([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [mode, setMode] = useState(Mode.Create);

  useEffect(() => {
    const getDishes = async () => {
      const dishes = await getAllDishes();
      setLoading(false);
      setDishes(dishes);
    };

    getDishes();
  }, []);

  const handleCreateDish = async (request: DishRequest) => {
    await createDish(request);
    closeModal();

    const dishes = await getAllDishes();
    setDishes(dishes);
  };

  const handleUpdateDish = async (id: string, request: DishRequest) => {
    await updateDish(id, request);
    closeModal();

    const dishes = await getAllDishes();
    setDishes(dishes);
  };

  const handleDeleteDish = async (id: string) => {
    await deleteDish(id).then(async () => {
      await getAllDishes().then(setDishes);
    });
  };

  const openModal = () => {
    setMode(Mode.Create);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setValues(defaultValues);
    setIsModalOpen(false);
  };

  const openEditModal = (dish: Dish) => {
    setMode(Mode.Edit);
    setValues(dish);
    setIsModalOpen(true);
  };

  return (
    <div>
      <CreateUpdateDish
        mode={mode}
        values={values}
        isModalOpen={isModalOpen}
        handleCreate={handleCreateDish}
        handleUpdate={handleUpdateDish}
        handleCancel={closeModal}
      />

      {loading ? (
        <Title>{t("loading")}</Title>
      ) : (
        <Dishes
          dishes={dishes}
          handleOpen={openEditModal}
          handleDelete={handleDeleteDish}
        />
      )}

      <div
        style={{
          position: "sticky",
          bottom: 0,
          padding: "10px",
          textAlign: "center",
        }}
      >
        <Button type="primary" size="large" onClick={openModal}>
          {t("addDish")}
        </Button>
      </div>
    </div>
  );
}
