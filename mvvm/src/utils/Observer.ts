class Observer<T> {
  constructor(
    public next: (newValue: T) => void,
    public unsubscribe: () => void
  ) {}
}

export class Observable<T> {
  private observers: Observer<T>[] = [];

  public next(newValue: T) {
    this.observers.forEach((observer) => {
      observer.next(newValue);
    });
  }

  public subscribe(callback: (newValue: T) => void): Observer<T> {
    const length = this.observers.length;
    const observer = new Observer<T>(callback, () => {
      this.observers.splice(length, 1);
    });
    this.observers.push(observer);
    return observer;
  }
}
