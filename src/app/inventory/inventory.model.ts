
/* inventoryItem */
interface InventoryItem {
  type: string
}

    interface iPotion extends InventoryItem{
      name: string
      effect: string
    }
    interface iScroll extends InventoryItem{
      name: string
      effect: string
    }
    interface iArmor extends InventoryItem{
      name: string
      armorrating: number
    }
    interface iWeapon extends InventoryItem{
      name: string
      attack: string
      damage: string
      damagetype: string
    }

/* potions */
class MinorHealingPotion implements iPotion{
  type ="potion";
  name = "minor healing potion";
  effect = "minorheal";
}

class HealingPotion implements iPotion{
  type ="potion";
  name = "healing potion";
  effect = "heal";
}

class MajorHealingPotion implements iPotion{
  type ="potion";
  name = "major healing potion";
  effect = "majorheal";
}

/* armor */
class breaches implements iArmor{
  type = 'armor';
  name = "breeches";
  armorrating = 1;
}
interface Container {
  slots: number
  type: string;
}

class KnapSack implements Container {
  slots = 16;
  type = "bag";
}
class PeasantSack implements Container{
  slots = 20;
  type = "bag";
}
class MerchantSack implements Container{
  slots = 24;
  type = "bag";
}
class SoldiersSack implements Container{
  slots = 28;
  type = "bag";
}
class Beltpouch implements Container{
  slots = 6;
  type = "pouch";
}
class PotionBag implements Container{
  slots = 4;
  type = "pouch";
}
class ScrollCase implements Container{
  slots = 6;
  type = "pouch";
}
