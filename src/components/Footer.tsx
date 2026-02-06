import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={styles.content}>
                    <p>
                        &copy; {new Date().getFullYear()} IEEE Microwave Theory and Technology Society (MTT-S) Student Branch Chapter, SRM Institute of Science and Technology.
                        <br />
                        All rights reserved.
                    </p>
                    <p className={styles.disclaimer}>
                        This website is maintained by the IEEE Microwave Theory and Technology Society (MTT-S) Student Branch Chapter at SRM Institute of Science and Technology.
                        <br />
                        IEEE is a registered trademark of The Institute of Electrical and Electronics Engineers, Inc.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
