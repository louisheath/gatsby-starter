// Extend our existing window interface to tell it about the Userled property.
declare global {
  interface Window {
    Userled: any;
  }
}

const page = (name?: string) => {
  if (window?.Userled) window.Userled("page", name);
}

interface UserledProps {
  page: (name?: string) => void;
}

export const Userled: UserledProps = {
  page: page,
};
