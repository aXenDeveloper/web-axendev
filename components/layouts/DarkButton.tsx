const DarkButton = () => {
  const handleButton = () => {
    if (!localStorage.getItem('darkMode')) {
      document.body.classList.add('darkMode');
      localStorage.setItem('darkMode', '1');
    } else {
      document.body.classList.remove('darkMode');
      localStorage.removeItem('darkMode');
    }
  };

  return <button onClick={handleButton}>Dark</button>;
};

export default DarkButton;
