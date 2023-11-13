class Human {
  constructor(name) {
    this.name = name;
  }
}

class Man extends Human {
  constructor(name) {
    super(name);
    this.gender = 'male';
  }
}

class Woman extends Human {
  constructor(name) {
    super(name);
    this.gender = 'female';
  }
}

class God {
  /**
   * @returns Human[]
   */
  static create() {
    const adam = new Man('Adam');
    const eve = new Woman('Eve');
    return [adam, eve];
  }
}
