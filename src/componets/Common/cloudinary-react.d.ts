declare module 'cloudinary-react' {
    import { Component, CSSProperties } from 'react';
  
    interface ImageProps {
      cloudName: string;
      uploadPreset?: string;
      publicId: string;
      alt?: string;
      secure?: boolean;
      width?: number | string;
      height?: number | string;
      crop?: string;
      gravity?: string;
      radius?: number | string;
      effect?: string;
      opacity?: number;
      border?: string;
      className?: string;
      style?: CSSProperties;
      onClick?: () => void;
      onLoad?: () => void;
      onError?: () => void;
      // Thêm các thuộc tính khác tại đây (nếu cần)
    }
  
    class Image extends Component<ImageProps> {}
  
    export {
      Image,
      // Xuất các thành phần khác tại đây (nếu cần)
    };
  }

  
  
  
  