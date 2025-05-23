import * as React from 'react';
import type { MenuRef as RcMenuRef } from 'rc-menu';
import { ItemGroup } from 'rc-menu';
import type { ItemType, MenuItemType } from './interface';
import type { MenuProps } from './menu';
import type { MenuTheme } from './MenuContext';
import MenuDivider from './MenuDivider';
import Item from './MenuItem';
import type { MenuItemProps } from './MenuItem';
import SubMenu from './SubMenu';
import type { SubMenuProps } from './SubMenu';
export type { MenuItemGroupProps } from 'rc-menu';
export type { MenuDividerProps } from './MenuDivider';
export type { MenuItemProps, MenuProps, MenuTheme, SubMenuProps };
export type MenuRef = {
    menu: RcMenuRef | null;
    focus: (options?: FocusOptions) => void;
};
type ComponentProps = MenuProps & React.RefAttributes<MenuRef>;
type GenericItemType<T = unknown> = T extends infer U extends MenuItemType ? unknown extends U ? ItemType : ItemType<U> : ItemType;
type GenericComponentProps<T = unknown> = Omit<ComponentProps, 'items'> & {
    items?: GenericItemType<T>[];
};
type CompoundedComponent = React.ForwardRefExoticComponent<GenericComponentProps> & {
    Item: typeof Item;
    SubMenu: typeof SubMenu;
    Divider: typeof MenuDivider;
    ItemGroup: typeof ItemGroup;
};
type GenericComponent = Omit<CompoundedComponent, ''> & (<T extends MenuItemType>(props: GenericComponentProps<T>) => ReturnType<CompoundedComponent>);
declare const Menu: GenericComponent;
export default Menu;
