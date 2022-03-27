const cleanupText = (textArray:string):string[] => {
    return textArray.split(",").map((string) => string.trim());
}

export default cleanupText;