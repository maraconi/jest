export default function showHealth(units) {
  let result;
  if (units.health > 50) {
    result = 'healthy';
  }
  if (units.health <= 50 && units.health > 15) {
    result = 'wounded';
  }
  if (units.health <= 15 && units.health > 0) {
    result = 'critical';
  }
  if (Number.isNaN(units.health) || typeof (units.health) !== 'number' || units.health < 0 || units.health === undefined) {
    throw new Error('Error!');
  }
  return result;
}
