'use client'

import { useState } from "react"


export default function ChainPage() {

    const [shopIndex, setShopIndex] = useState(0)

    return (
        <div>
            <section className="section-content">
                <div className="container-fluid row justify-content-between align-items-center">
                    <div className="col-4">
                        <div className={`text-center card-brand ${shopIndex == 0 ? 'active' : ''}`}
                            onClick={() => {
                                setShopIndex(0);
                            }}>
                            DANNYGREEN BIOMARKT <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`text-center card-brand ${shopIndex == 1 ? 'active' : ''}`}
                            onClick={() => {
                                setShopIndex(1);
                            }}>
                            DANNYGREEN LOVES <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className={`text-center card-brand ${shopIndex == 2 ? 'active' : ''}`}
                            onClick={() => {
                                setShopIndex(2);
                            }}>
                            DANNYGREEN AUTO BIOMARKT <i className="fa fa-shopping-bag" aria-hidden="true"></i>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container-fluid section-content section-system" >
                <div className="content">
                    <div className="image"></div>
                    <div className="row py-3">
                        <div className="col-4">
                            <div className="heading-24">HỆ THỐNG CHUỖI CỬA HÀNG</div>
                            <div className="heading-36">DANNYGREEN BIOMARKT</div>
                            <div className="text">
                                Chuyên cung cấp thực phẩm sạch, hữu cơ, an toàn với
                                sức khỏe và các sản phẩm chăm sóc cả nhân có nguồn gốc từ thiên nhiên như rau, củ quả trái cây hữu cơ, thực phẩm chế biến...
                            </div>
                        </div>
                        <div className="col-8">
                            <div className="row px-3">
                                <div className="col-4">
                                    <div className="item">
                                        <div className="text">
                                            <div className="heading-64">4</div>
                                            <div className="heading-18">Thành Phố</div>
                                        </div>
                                        <img src="images/green_city.png" alt="city background" className="bg" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="item">
                                        <div className="text">
                                            <div className="heading-64">8</div>
                                            <div className="heading-18">Cửa Hàng<br />Danny Green BioMarkt</div>
                                        </div>
                                        <img src="images/store.png" alt="city background" className="bg" />
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="item">
                                        <div className="text">
                                            <div className="heading-64">4</div>
                                            <div className="heading-18">Dòng Sản Phẩm</div>
                                        </div>
                                        <img src="images/products.png" alt="city background" className="bg" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="p-5"></section>

            <section className="container-fluid section-content section-map">
                <center>
                    <div className="heading-36">Cửa Hàng DannyGreen BioMarkt Gần Bạn</div>
                    <div className="col-5 py-5">
                        <form className="row">
                            <div className="form-group col-6">
                                <label htmlFor="select-city" className="text-end">Chọn Tỉnh/Thành</label>
                                <select className="form-control" id="select-city">
                                    <option>Thành Phố Hồ Chí Minh</option>
                                    <option>Thành Phố Cần Thơ</option>
                                </select>
                            </div>
                            <div className="form-group col-6">
                                <label htmlFor="select-district" className="text-end">Chọn Quận/Huyện</label>
                                <select className="form-control" id="select-district">
                                    <option>Chọn Quận/Huyện</option>
                                </select>
                            </div>
                        </form>
                    </div>
                </center>
                <div className="row">
                    <div className="col-3">
                        <div className="scroll">
                            <div className="position-item p-2">
                                <span><i className="fa fa-map-marker" /> DannyGreen BioMarkt Phù Đổng, Quận 1</span>
                                <ul>
                                    <li>Địa chỉ: 325 Lý Tự Trọng, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh</li>
                                    <li>Thời Gian: 7h30 - 23h30 (kể cả CT và ngày lễ)</li>
                                    <li>Số Điện Thoại: 0901 277 997</li>
                                </ul>
                            </div>
                            <div className="position-item p-2">
                                <span><i className="fa fa-map-marker" /> DannyGreen BioMarkt Phù Đổng, Quận 1</span>
                                <ul>
                                    <li>Địa chỉ: 325 Lý Tự Trọng, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh</li>
                                    <li>Thời Gian: 7h30 - 23h30 (kể cả CT và ngày lễ)</li>
                                    <li>Số Điện Thoại: 0901 277 997</li>
                                </ul>
                            </div>
                            <div className="position-item p-2">
                                <span><i className="fa fa-map-marker" /> DannyGreen BioMarkt Phù Đổng, Quận 1</span>
                                <ul>
                                    <li>Địa chỉ: 325 Lý Tự Trọng, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh</li>
                                    <li>Thời Gian: 7h30 - 23h30 (kể cả CT và ngày lễ)</li>
                                    <li>Số Điện Thoại: 0901 277 997</li>
                                </ul>
                            </div>
                            <div className="position-item p-2">
                                <span><i className="fa fa-map-marker" /> DannyGreen BioMarkt Phù Đổng, Quận 1</span>
                                <ul>
                                    <li>Địa chỉ: 325 Lý Tự Trọng, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh</li>
                                    <li>Thời Gian: 7h30 - 23h30 (kể cả CT và ngày lễ)</li>
                                    <li>Số Điện Thoại: 0901 277 997</li>
                                </ul>
                            </div>
                            <div className="position-item p-2">
                                <span><i className="fa fa-map-marker" /> DannyGreen BioMarkt Phù Đổng, Quận 1</span>
                                <ul>
                                    <li>Địa chỉ: 325 Lý Tự Trọng, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh</li>
                                    <li>Thời Gian: 7h30 - 23h30 (kể cả CT và ngày lễ)</li>
                                    <li>Số Điện Thoại: 0901 277 997</li>
                                </ul>
                            </div>
                            <div className="position-item p-2">
                                <span><i className="fa fa-map-marker" /> DannyGreen BioMarkt Phù Đổng, Quận 1</span>
                                <ul>
                                    <li>Địa chỉ: 325 Lý Tự Trọng, Phường Bến Thành, Quận 1, Thành Phố Hồ Chí Minh</li>
                                    <li>Thời Gian: 7h30 - 23h30 (kể cả CT và ngày lễ)</li>
                                    <li>Số Điện Thoại: 0901 277 997</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-9">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.8336046672066!2d106.73814127480695!3d10.748570459727108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528d83d9e99ff%3A0xe5cf84a7872161d6!2zMTU5IFRy4bqnbiBUcuG7jW5nIEN1bmcgLCBQaMaw4budbmcgMiwgUXXhuqNuIDcsIEjDoCBDaMOtbmgsIFZpZXRuYW0!5e0!3m2!1svi!2s!4v1718778708564!5m2!1svi!2s"
                            width="100%"
                            height="710px"
                            style={{ border: 0, borderRadius: '12px' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>

            <section className="p-5 m-5"></section>
        </div>

    )
}