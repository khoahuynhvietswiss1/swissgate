export type IconType =
  'logo'
  | 'menu-user'
  | 'menu-marak'
  | 'menu-heart'
  | 'menu-blog'
  | 'menu-investment'
  | 'search'
  | 'facebook'
  | 'instagram'
  | 'linkedin'
  | 'youtube'
  | 'world'
  | 'cbuy'
  | 'donald'
  | 'hamburger'
  | 'cross'
  | 'phone'
  | 'herbalea';

export type updateState<T> = (_newState: T) => void;

export interface IAppContext extends IAppState {
  updateState: updateState<IAppStateChange>;
}

export interface IAppState {
  isMenuOpen?: boolean;
  isSearchOpen?: boolean;
}

export interface IAppStateChange {
  isMenuOpen?: boolean;
  isSearchOpen? : boolean;
}

