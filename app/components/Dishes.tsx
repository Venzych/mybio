import Card from "antd/es/card/Card";
import { CardTitle } from "./CardTitle";
import Button from "antd/es/button/button";

interface Props {
  dishes: Dish[];
  handleDelete: (id: string) => void;
  handleOpen: (dish: Dish) => void;
}

export const Dishes = ({ dishes, handleDelete, handleOpen }: Props) => {
  return (
    <div className="cards">
      {dishes.map((dish: Dish) => (
        <Card
          key={dish.id}
          title={<CardTitle title={dish.title} price={dish.price} />}
          bordered={false}
        >
          <p>
            {dish.description}. Порция: {dish.weight} г.
          </p>

          <div className="card__buttons">
            <Button onClick={() => handleOpen(dish)} style={{ flex: 1 }}>
              Редактировать
            </Button>
            <Button
              onClick={() => handleDelete(dish.id)}
              danger
              style={{ flex: 1 }}
            >
              Удалить
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};
