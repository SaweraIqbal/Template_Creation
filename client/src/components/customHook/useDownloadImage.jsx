import { useCallback } from 'react';
import html2canvas from 'html2canvas';

const useDownloadImage = () => {
  const downloadImage = useCallback(async (selector, filename = 'download.png') => {
    const element = document.querySelector(selector);

    if (element) {
      try {
        // Convert the element to canvas
        const canvas = await html2canvas(element);

        // Convert the canvas to a data URL (PNG format)
        const dataUrl = canvas.toDataURL('image/png');

        // Create a temporary anchor element to trigger the download
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = filename;
        link.click();
      } catch (error) {
        console.error('Failed to download image:', error);
      }
    } else {
      console.error('Element not found for download');
    }
  }, []);

  return downloadImage;
};

export default useDownloadImage;
