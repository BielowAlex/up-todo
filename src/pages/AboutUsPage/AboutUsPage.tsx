import React from "react";
import style from "./style.module.scss";
import { Button } from "../../components";
import { useAppSelector } from "../../hooks";

const AboutUsPage: React.FC = () => {
  const isLogin: boolean = useAppSelector((state) => state.authReducer.isLogin);

  return (
    <div className={style.container}>
      <h2>About-us</h2>
      <p>
        Welcome to our platform! We're dedicated to providing you with a
        seamless experience to organize and manage your tasks effectively.
        Whether you're a student, a busy professional, or someone striving for
        better daily organization, our platform is here to support you.
      </p>
      <h3> Registration and Login:</h3>
      <p>
        - Joining our community is easy! Simply visit our website and sign up
        using your email and password, or opt for quick access with your Google
        account.
      </p>
      <h3>Task Planning:</h3>
      <p>
        - Once you're logged in, you can immediately begin planning your tasks
        for the week ahead. Add descriptions, specify dates and times, and even
        set priority levels to ensure nothing falls through the cracks.
      </p>
      <h3>Task Management:</h3>
      <p>
        - Our intuitive interface allows you to effortlessly navigate through
        your scheduled tasks. Easily view all upcoming assignments and projects,
        mark tasks as complete, or remove them from your list as needed.
      </p>
      <h3>Synchronization and Accessibility:</h3>
      <p>
        - Enjoy the convenience of automatic synchronization across all your
        devices. Whether you're on your laptop, tablet, or smartphone, access
        your tasks anytime, anywhere, as long as you're logged into your
        account.
      </p>
      <h3>Site Benefit:</h3>
      <p>
        - At our core, we aim to empower you to stay organized and enhance
        productivity. By offering a clear visual representation of your weekly
        tasks, we help you stay on top of your goals and commitments. Our
        platform is the perfect companion for anyone seeking to streamline their
        daily affairs and achieve greater efficiency. Join us today and take
        control of your time like never before!
      </p>
      <Button to={isLogin ? "/" : "/auth"} variant="default">
        Lets start
      </Button>
    </div>
  );
};

export default AboutUsPage;
