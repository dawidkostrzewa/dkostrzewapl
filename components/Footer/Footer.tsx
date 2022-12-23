type Year = number | string | null;

const Footer = () => {
    let currentYear = new Date().getFullYear();
    const foundedYear = 2019;
    let year: Year = null;
    if (currentYear === foundedYear) {
        year = currentYear;
    } else {
        year = `${foundedYear} - ${currentYear}`;
    }

    return <footer className="flex justify-center mt-8  py-4">Made with ❤ by me | © {year}</footer>;
};

export default Footer;
