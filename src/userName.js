export const getUserName = () =>  {
    const sUserName = process.argv.slice(2).pop().split("=").pop();
    const capitalizedName = sUserName.charAt(0).toUpperCase() + sUserName.slice(1);
    return capitalizedName;
}