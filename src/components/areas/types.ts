export interface AreasProps {
  title: string;
  subtitle?: string;
  description: string;
  hasSpecialBg?: boolean;
  children: React.ReactElement;
  isImageLeft?: boolean;
  image?: string;
}
