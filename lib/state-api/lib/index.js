class StateApi {
  constructor(rawData) {
    this.data = {
      articles: this.mapIntoObject(rawData.articles),
      authors: this.mapIntoObject(rawData.authors),
      searchTerm: "",
      timestamp: new Date()
    };

    this.subscribers = {};
    this.subscribtionId = 0;
  }
  mapIntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }

  subscribe = action => {
    this.subscribtionId++;
    this.subscribers[this.subscribtionId] = action;
    return this.subscribtionId;
  };

  unsubscribe = subscribtionId => {
    delete this.subscribers[subscribtionId];
  };

  notifySubscribers = () => {
    Object.values(this.subscribers).forEach(action => {
      action();
    });
  };

  lookupAuthor(authorId) {
    return this.data.authors[authorId];
  }

  mergeWithState = changeState => {
    this.data = {
      ...this.data,
      ...changeState
    };
    this.notifySubscribers();
  };

  setSearchTerm = searchTerm => {
    this.mergeWithState({ searchTerm });
  };

  startClock = () => {
    setInterval(() => {
      this.mergeWithState({
        timestamp: new Date()
      });
    }, 1000);
  };

  getState() {
    return this.data;
  }
}

export default StateApi;
