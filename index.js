import React from "react";
import { Frame } from "./Frame";
import "./style.css";

export const Signup = () => {
    return (
        <div className="signup">
            <div className="frame-wrapper">
                <div className="div">
                    <div className="div-2">
                        <div className="div-2">
                            <div className="overlap">
                                <div className="rectangle" />
                                <div className="element">
                                    <div className="overlap-group">
                                        <div className="text-wrapper">Nama Belakang</div>
                                    </div>
                                </div>
                                <div className="overlap-wrapper">
                                    <div className="div-wrapper">
                                        <div className="text-wrapper-2">Mobile Number</div>
                                    </div>
                                </div>
                                <div className="overlap-group-wrapper">
                                    <div className="div-wrapper">
                                        <div className="text-wrapper-3">Email Address</div>
                                    </div>
                                </div>
                                <div className="element-2">
                                    <div className="div-wrapper">
                                        <div className="text-wrapper-4">Password</div>
                                    </div>
                                </div>
                                <div className="element-3">
                                    <div className="div-wrapper">
                                        <div className="text-wrapper-5">Confirm Password</div>
                                    </div>
                                </div>
                                <div className="element-4">
                                    <div className="rectangle-2" />
                                    <div className="text-wrapper-6">Confirm Password</div>
                                </div>
                                <div className="group">
                                    <p className="already-have-an">
                                        <span className="span">Already have an account ? </span>
                                        <span className="text-wrapper-7">Sign in</span>
                                    </p>
                                </div>
                                <div className="element-5">
                                    <div className="overlap-2">
                                        <div className="text-wrapper-8">Nama Depan</div>
                                    </div>
                                </div>
                                <div className="text-wrapper-9">Daftar Akun</div>
                            </div>
                        </div>
                        <img className="img" alt="Group" src="group.png" />
                        <Frame className="frame-4" divClassName="frame-instance" property1="default" text="Confirm" />
                    </div>
                    <p className="JOB-hunt">
                        <span className="text-wrapper-10">JOB </span>
                        <span className="text-wrapper-11">Hunt</span>
                    </p>
                    <img className="young-woman-working" alt="Young woman working" src="young-woman-working-on-laptop.png" />
                </div>
            </div>
        </div>
    );
};
