import Input from "antd/es/input/Input";
import Modal from "antd/es/modal/Modal";
import { DishRequest } from "../services/dishes";
import { useEffect, useState } from "react";
import TextArea from "antd/es/input/TextArea";

interface Props {
  mode: Mode;
  values: Dish;
  isModalOpen: boolean;
  handleCancel: () => void;
  handleCreate: (request: DishRequest) => void;
  handleUpdate: (id: string, request: DishRequest) => void;
}

export enum Mode {
  Create,
  Edit,
}

export const CreateUpdateDish = ({
  mode,
  values,
  isModalOpen,
  handleCancel,
  handleCreate,
  handleUpdate,
}: Props) => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [price, setPrice] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);

  useEffect(() => {
    setTitle(values.title);
    setDescription(values.description);
    setPrice(values.price);
    setWeight(values.weight);
  }, [values]);

  const handleOnOk = async () => {
    const dishRequest = { title, description, price, weight };

    mode == Mode.Create
      ? handleCreate(dishRequest)
      : handleUpdate(values.id, dishRequest);
  };

  return (
    <Modal
      title={mode == Mode.Create ? "Добавить блюдо" : "Редактировать блюдо"}
      open={isModalOpen}
      onOk={handleOnOk}
      onCancel={handleCancel}
      cancelText={"Отмена"}
    >
      <div className="dish__modal">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Название"
        />
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          autoSize={{ minRows: 3, maxRows: 3 }}
          placeholder="Описание"
        />
        <Input
          value={price === 0 ? undefined : String(price)}
          onChange={(e) => setPrice(Number(e.target.value) || 0)}
          placeholder="Цена"
          addonAfter="руб."
        />
        <Input
          value={weight === 0 ? undefined : String(weight)}
          onChange={(e) => setWeight(Number(e.target.value) || 0)}
          placeholder="Вес"
          addonAfter="г"
        />
      </div>
    </Modal>
  );
};
