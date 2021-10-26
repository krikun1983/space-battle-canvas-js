import Bullet from './Bullet.js';
import BULLET from './constants/bullet.js';
import { game } from './Game.js';
import MobileObject from './MobileObject.js';

const Enemy = function (position, size, speed, life, magazine) {
  MobileObject.call(this, position, size, speed);
  this.life = life;
  this.magazine = magazine;
}

Enemy.prototype = Object.create(MobileObject.prototype);
Enemy.prototype.constructor = Enemy;
Enemy.prototype.fire = function () {
  if (game.enemyBullets.length < this.magazine) {
    const newBullet = new Bullet({ x: this.x - 6, y: this.y + 25 }, BULLET.size, BULLET.speed);
    game.enemyBullets.push(newBullet);
  }
}

export default Enemy;