import React from "react";
import classNames from "classnames/bind";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCode,
    faCodeBranch,
    faDonate,
    faEnvelope,
    faFileContract,
    faLock,
    faShieldAlt,
} from "@fortawesome/free-solid-svg-icons";

import { faDiscord, faTwitter } from "@fortawesome/free-brands-svg-icons";
import styles from "./Footer.module.scss";
import ChangeTheme from "../ChangeTheme";

const cx = classNames.bind(styles);
const Footer = () => {

    return (
        <Container fluid className={cx("wrapper")}>
            <Row className={cx("row")}>
                <div className={cx("footer-wrapper")}>
                    <div className={cx("key-tips")}>
                        <>
                            <div className={cx("key-tips1")}>
                                <div className={cx("key-text")}>tab</div> + <div className={cx("key-text")}>enter</div>{" "}
                                - restart test
                            </div>

                            <div className={cx("key-tips2")}>
                                <div className={cx("key-text")}>esc</div> or <div className={cx("key-text")}>ctrl</div>{" "}
                                + <div className={cx("key-text")}>shift</div> + <div className={cx("key-text")}>p</div>{" "}
                                - command line
                            </div>
                        </>
                    </div>
                    <div className={cx("left-right")}>
                        <Col className={cx("left")}>
                            <div className={cx("col-wrapper")}>
                                <button title="leaderboard" className={cx("link")}>
                                    <i>
                                        <FontAwesomeIcon icon={faEnvelope} size="lg" style={{ marginRight: "7px" }} />
                                        Contact
                                    </i>
                                </button>
                                <button title="leaderboard" className={cx("link")}>
                                    <i>
                                        <FontAwesomeIcon icon={faDonate} size="lg" style={{ marginRight: "7px" }} />{" "}
                                        Support
                                    </i>
                                </button>
                                <a
                                    href="https://github.com/monkeytypegame/monkeytype"
                                    className={cx("link")}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <i>
                                        <FontAwesomeIcon icon={faCode} size="lg" style={{ marginRight: "7px" }} />{" "}
                                        GitHub
                                    </i>
                                </a>

                                <a
                                    href="https://www.discord.gg/monkeytype"
                                    className={cx("link")}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <i>
                                        <FontAwesomeIcon icon={faDiscord} size="lg" style={{ marginRight: "7px" }} />{" "}
                                        Discord
                                    </i>
                                </a>

                                <a
                                    href="https://twitter.com/monkeytypegame"
                                    className={cx("link")}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <i>
                                        <FontAwesomeIcon icon={faTwitter} size="lg" style={{ marginRight: "7px" }} />{" "}
                                        Twitter
                                    </i>
                                </a>

                                <button title="leaderboard" className={cx("link")}>
                                    <i>
                                        <FontAwesomeIcon
                                            icon={faFileContract}
                                            size="lg"
                                            style={{ marginRight: "7px" }}
                                        />{" "}
                                        Term
                                    </i>
                                </button>
                                <button title="leaderboard" className={cx("link")}>
                                    <i>
                                        <FontAwesomeIcon icon={faShieldAlt} size="lg" style={{ marginRight: "7px" }} />{" "}
                                        Security
                                    </i>
                                </button>
                                <button title="leaderboard" className={cx("link")}>
                                    <i>
                                        <FontAwesomeIcon icon={faLock} size="lg" style={{ marginRight: "7px" }} />{" "}
                                        Privatcy
                                    </i>
                                </button>
                            </div>
                        </Col>
                        <Col className={cx("right")}>
                            <div className={cx("col-wrapper")}>
                                <div className={cx("button-theme")}>
                                    <ChangeTheme></ChangeTheme>
                                </div>
                                <button className={cx("link")}>
                                    <i>
                                        <FontAwesomeIcon icon={faCodeBranch} size="lg" style={{ marginRight: "7px" }} />
                                        v23.40.1
                                    </i>
                                </button>
                            </div>
                        </Col>
                    </div>
                </div>
            </Row >
        </Container >
    );
};

export default Footer;
