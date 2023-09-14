export const getFav = () => {
  const dataLocal = localStorage.getItem("fav");
  return dataLocal ? JSON.parse(dataLocal) : [];
};

export const setFavorite = (dentist) => {
  const storageFav = getFav();
  const saveFav = storageFav.filter((fav) => {
    return fav.id === dentist.id;
  });
  if (saveFav.length === 0) {
    storageFav.push(dentist);
    localStorage.setItem("fav", JSON.stringify(storageFav));
    alert("El dentista que eligió se guardó exitosamente");
  } else {
    alert("Dentista guardado correctamente");
  }
};

export const isFav = (id) => {
  const dataLocal = getFav();
  const saveFav = dataLocal.filter((fav) => {
    return fav.id === id;
  });
  return saveFav.length === 1;
};

export const removeFavorite = (id) => {
  let storageFav = getFav();
  const index = storageFav.findIndex((fav) => fav.id === id);
  if (index !== -1) {
    storageFav.splice(index, 1);
    localStorage.setItem("fav", JSON.stringify(storageFav));
    alert("Dentista eliminado con éxito de tu lista de favoritos");
  } else {
    alert("No está permitido realizar esa función");
  }
};
