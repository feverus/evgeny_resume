export const scrollTo = (target: string) => {
    const element = document.getElementById(target);
    console.log(target, element);
    element?.scrollIntoView({ behavior: "smooth" });
}
