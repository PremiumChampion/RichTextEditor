/**
 * Converts a file into the Base64 format
 *
 * @param {File} file the file to convert
 */
export const convertFileToBase64String = (file: File) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = error => reject(error);
    reader.readAsDataURL(file);
});