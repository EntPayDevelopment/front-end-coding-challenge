import { mock } from "./mock";

export const getMedias = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(mock);
    }, 300);
  });
};

export const addToWatchlist = (id) => {
  const successRate = 0.95;
  const success = Math.random() <= successRate ? true : false;
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ message: `Added media ${id}`, status: 200 });
      } else {
        reject({ message: `Error ${id}`, status: 422 });
      }
    }, 300);
  });
};

export const removeFromWatchlist = (id) => {
  return new Promise((resolve, _) => {
    setTimeout(() => {
      resolve({ message: `Removed media ${id}`, status: 200 });
    }, 300);
  });
};
