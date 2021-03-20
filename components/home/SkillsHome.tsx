const SkillsHome = () => {
  return (
    <section className="home_skills">
      <div className="container">
        <h2>Skills</h2>

        <ul className="home_skills_contain">
          <li className="home_skills_backend">
            <article>
              <header>header</header>
              backend
            </article>
          </li>

          <li className="home_skills_frontend">frontend</li>

          <li className="home_skills_tools">tools</li>
        </ul>
      </div>
    </section>
  );
};

export default SkillsHome;
