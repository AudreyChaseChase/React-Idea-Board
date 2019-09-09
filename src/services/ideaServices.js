import uuid from 'uuid/v4';

const IDEAS_STORE_KEY = 'IDEAS_STORE';
const DELAY_MS = 500;

function getIdeasFromLocalStorage() {
  try {
    return JSON.parse(window.localStorage.getItem(IDEAS_STORE_KEY) || '[]');
  } catch (ex) {
    return [];
  }
}

function saveIdeasToLocalStorage(data) {
  try {
    window.localStorage.setItem(IDEAS_STORE_KEY, JSON.stringify(data));
  } catch (ex) {
    // prevent issue with browser that don't support local storage
  }
}

export async function loadIdeas() {
  return new Promise((resolve) => {
    const data = getIdeasFromLocalStorage();
    setTimeout(() => {
      resolve({ data });
    }, DELAY_MS);
  });
}

export async function getNewIdeaData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      const ideas = getIdeasFromLocalStorage();
      const newIdea = {
        id: uuid(),
        created_date: new Date().toISOString(),
      };
      ideas.push(newIdea);
      saveIdeasToLocalStorage(ideas);
      resolve({ data: newIdea });
    }, DELAY_MS);
  });
}

export async function updateIdea({ id, title, body }) {
  return new Promise((resolve, reject) => {
    const ideas = getIdeasFromLocalStorage();
    const ideaToUpdate = ideas.find(x => x.id === id);
    if (!ideaToUpdate) {
      reject({ response: { status: 400 } });
      return;
    }
    ideaToUpdate.title = title;
    ideaToUpdate.body = body;
    saveIdeasToLocalStorage(ideas);
    setTimeout(() => {
      resolve({});
    }, DELAY_MS);
  });
}

export async function deleteIdea(id) {
  return new Promise((resolve) => {
    const ideas = getIdeasFromLocalStorage().filter(x => x.id !== id);
    saveIdeasToLocalStorage(ideas);
    setTimeout(() => {
      resolve({ data: {} });
    }, DELAY_MS);
  });
}