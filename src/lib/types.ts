// New canonical names
export type KkuSize = "sm" | "md" | "lg";

export type KkuColor =
  | "primary"
  | "secondary"
  | "accent"
  | "success"
  | "warning"
  | "danger"
  | "info";

export type KkuVariant = "filled" | "outline" | "ghost";

export interface KkuBaseProps {
  shadow?: "sm" | "md" | "lg" | "none";
}

// Backward-compatible aliases
/** @deprecated Use KkuSize instead */
export type NeoBrutalSize = KkuSize;
/** @deprecated Use KkuColor instead */
export type NeoBrutalColor = KkuColor;
/** @deprecated Use KkuVariant instead */
export type NeoBrutalVariant = KkuVariant;
/** @deprecated Use KkuBaseProps instead */
export type NeoBrutalBaseProps = KkuBaseProps;
