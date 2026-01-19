"use client";

export function getLocalStorage(id: string) {
  try {
    if (typeof window === "undefined" || !window) {
      return {
        error: "Called in server actions",
        data: null,
      };
    }
    const key = `${id}-recent-Templates`;
    const templates = window.localStorage.getItem(key);
    return {
      error: null,
      data: templates ? JSON.parse(templates) : null,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Internal server error occured",
      data: null,
    };
  }
}
export function setLocalStorage(id: string, data: string) {
  try {
    if (typeof window === "undefined" || !window) {
      return {
        error: "Called in server actions",
        data: null,
      };
    }
    const key = `${id}-recent-Templates`;
    window.localStorage.setItem(key, data);
    return {
      error: null,
      data: true,
    };
  } catch (error) {
    console.error(error);
    return {
      error: "Internal server error occured",
      data: null,
    };
  }
}
export const deleteLocalStorage = (id: string) => {
    try {  
        if (typeof window === "undefined" || !window) {
            return {
                error: "Called in server actions",
                data: null,
            };
        }  
        const key = `${id}-recent-Templates`;
        window.localStorage.removeItem(key);     
    }
    catch (error) {
        console.error(error);
        return {
            error: "Internal server error occured",
            data: null,
        };
    }     
}
