export const getState = (key, data) => {
  try {
    return localStorage.getItem(key, JSON.stringify(data)) || [];
  } catch (e) {
    console.error("Could not save state:", e);
    return [];
  }
};
export const saveState = (key, data) => {
  try {
    const newSave = JSON.parse(localStorage.getItem("formState")) || [];
    const upadted = [...newSave, data];
    localStorage.setItem(key, JSON.stringify(upadted));
  } catch (e) {
    console.error("Could not save state:", e);
  }
};
export const deleteState = (key, data) => {
  try {
    const newDel = JSON.parse(localStorage.getItem("formState")) || [];
    const filtered = newDel.filter((item, index) => index !== data);
    console.log("filter", filtered);

    localStorage.setItem(key, JSON.stringify(filtered));
  } catch (e) {
    console.error("Could not save state:", e);
  }
};
