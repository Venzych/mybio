export interface DishRequest {
  title: string;
  description: string;
  price: number;
  weight: number;
}

export const getAllDishes = async () => {
  const response = await fetch("http://localhost:5163/Dishes");

  return response.json();
};

export const createDish = async (dishRequest: DishRequest) => {
  await fetch("http://localhost:5163/Dishes", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(dishRequest),
  });
};

export const updateDish = async (id: string, dishRequest: DishRequest) => {
  await fetch(`http://localhost:5163/Dishes/${id}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(dishRequest),
  });
};

export const deleteDish = async (id: string) => {
  await fetch(`http://localhost:5163/Dishes/${id}`, {
    method: "DELETE",
  });
};
