import { getUserFromStorage } from "../../utils/getUserFromStorage";
import { BASE_URL } from "../../utils/url";
import axios from "axios";

//!Get the token
const token = getUserFromStorage();

//!Add
export const addTransactionAPI = async ({
  type,
  category,
  amount,
  date,
  description,
}) => {
  const response = await axios.post(
    `${BASE_URL}/transaction/create`,
    {
      type,
      category,
      amount,
      date,
      description,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //!Return a promise
  return response.data;
};

//!Update
export const updateCategoryAPI = async ({ name, type, id }) => {
  const response = await axios.put(
    `${BASE_URL}/categories/update/${id}`,
    {
      name,
      type,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //!Return a promise
  return response.data;
};

//!Delete
export const deleteCategoryAPI = async (id) => {
  const response = await axios.delete(
    `${BASE_URL}/categories/delete/${id}`,

    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  //!Return a promise
  return response.data;
};
//!List
export const listTransactionAPI = async ({
  category,
  type,
  startDate,
  endDate,
}) => {
  const response = await axios.get(`${BASE_URL}/transaction/lists`, {
    params: { category, type, startDate, endDate },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  //!Return a promise
  return response.data;
};
