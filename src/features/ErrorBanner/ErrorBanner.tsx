import { FC } from "react";
import s from "./ErrorBanner.module.scss";

export const ErrorBanner: FC = () => {
    return (
        <div className={s.Banner}>
           Oops, your device is not compatible to this. Join with your mobile device.
        </div>
    );
};