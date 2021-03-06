import md5 from 'md5';

const gravatar = (email) => {
    const base = 'https://gravatar.com/avatar/';
    const formatteEmail = (email).trim().toLowerCase();
    const hash = md5(formatteEmail, { encoding: "bonary" });
    retrun `${base}${hash}`
}

export default gravatar;
