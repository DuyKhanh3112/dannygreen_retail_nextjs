'use client';

import clsx from "clsx";
import { useState } from "react";

interface AccordionItem {
    id: number;
    title: string;
    desc: string;
    address: string;
    image?: string;

}

const retailItems: AccordionItem[] = [
    {
        id: 0,
        title: 'DANNYGREEN BIOMARKT',
        desc: 'Chuyên cung cấp thực phẩm sạch hữu cơ, an toàn với sức khỏe và các sản phẩm chăm sóc cá nhân có nguồn gốc từ thiên nhiên như rau củ quả trái cây hữu cơ, thực phẩm chế biến,...',
        address: 'DannyGreen BioMarkt Phú Đông - Quận 1 (TP.HCM)',

    },
    {
        id: 1,
        title: 'DANNYGREEN BIOMARKT GÒ DẦU',
        desc: 'Chuyên cung cấp thực phẩm sạch hữu cơ, an toàn với sức khỏe và các sản phẩm chăm sóc cá nhân có nguồn gốc từ thiên nhiên như rau củ quả trái cây hữu cơ, thực phẩm chế biến,...',
        address: 'DannyGreen BioMarkt Phú Đông - Quận 1 (TP.HCM)',

    },
    {
        id: 2,
        title: 'DANNYGREEN BIOMARKT MIDTOWN',
        desc: 'Chuyên cung cấp thực phẩm sạch hữu cơ, an toàn với sức khỏe và các sản phẩm chăm sóc cá nhân có nguồn gốc từ thiên nhiên như rau củ quả trái cây hữu cơ, thực phẩm chế biến,...',
        address: 'DannyGreen BioMarkt Phú Đông - Quận 1 (TP.HCM)',

    }
    ,
    {
        id: 3,
        title: 'DANNYGREEN BIOMARKT CITYLAND Q7',
        desc: 'Chuyên cung cấp thực phẩm sạch hữu cơ, an toàn với sức khỏe và các sản phẩm chăm sóc cá nhân có nguồn gốc từ thiên nhiên như rau củ quả trái cây hữu cơ, thực phẩm chế biến,...',
        address: 'DannyGreen BioMarkt Phú Đông - Quận 1 (TP.HCM)',

    },
    {
        id: 4,
        title: 'DANNYGREEN BIOMARKT CẦN THƠ',
        desc: 'Chuyên cung cấp thực phẩm sạch hữu cơ, an toàn với sức khỏe và các sản phẩm chăm sóc cá nhân có nguồn gốc từ thiên nhiên như rau củ quả trái cây hữu cơ, thực phẩm chế biến,...',
        address: 'DannyGreen BioMarkt Phú Đông - Quận 1 (TP.HCM)',

    },
    {
        id: 5,
        title: 'DANNYGREEN BIOMARKT LONG BIÊN',
        desc: 'Chuyên cung cấp thực phẩm sạch hữu cơ, an toàn với sức khỏe và các sản phẩm chăm sóc cá nhân có nguồn gốc từ thiên nhiên như rau củ quả trái cây hữu cơ, thực phẩm chế biến,...',
        address: 'DannyGreen BioMarkt Phú Đông - Quận 1 (TP.HCM)',

    },

];
const loversItems: AccordionItem[] = [
    {
        id: 0,
        title: 'DANNYGREEN LOVERS',
        desc: 'Mô hình ăn nhanh lành mạnh (healthy fast food) tập trung vào các sản phẩm tươi – ngon – tiện lợi – tốt cho sức khỏe như trái cây cắt sẵn, nước ép nguyên chất, sinh tố tươi, detox…',
        address: 'DannyGreen Lovers Phù Đổng - Quận 1 (TP.HCM))',

    },
    {
        id: 1,
        title: 'DANNYGREEN LOVERS GÒ DẦU',
        desc: 'Mô hình ăn nhanh lành mạnh (healthy fast food) tập trung vào các sản phẩm tươi – ngon – tiện lợi – tốt cho sức khỏe như trái cây cắt sẵn, nước ép nguyên chất, sinh tố tươi, detox…',
        address: 'DannyGreen Lovers Phù Đổng - Quận 1 (TP.HCM))',

    },
    {
        id: 2,
        title: 'DANNYGREEN LOVERS MIDTOWN',
        desc: 'Mô hình ăn nhanh lành mạnh (healthy fast food) tập trung vào các sản phẩm tươi – ngon – tiện lợi – tốt cho sức khỏe như trái cây cắt sẵn, nước ép nguyên chất, sinh tố tươi, detox…',
        address: 'DannyGreen Lovers Phù Đổng - Quận 1 (TP.HCM))',
    }
    ,
    {
        id: 3,
        title: 'DANNYGREEN LOVERS CITYLAND Q7',
        desc: 'Mô hình ăn nhanh lành mạnh (healthy fast food) tập trung vào các sản phẩm tươi – ngon – tiện lợi – tốt cho sức khỏe như trái cây cắt sẵn, nước ép nguyên chất, sinh tố tươi, detox…',
        address: 'DannyGreen Lovers Phù Đổng - Quận 1 (TP.HCM))',
    },
    {
        id: 4,
        title: 'DANNYGREEN LOVERS CẦN THƠ',
        desc: 'Mô hình ăn nhanh lành mạnh (healthy fast food) tập trung vào các sản phẩm tươi – ngon – tiện lợi – tốt cho sức khỏe như trái cây cắt sẵn, nước ép nguyên chất, sinh tố tươi, detox…',
        address: 'DannyGreen Lovers Phù Đổng - Quận 1 (TP.HCM))',
    },
    {
        id: 5,
        title: 'DANNYGREEN LOVERS LONG BIÊN',
        desc: 'Mô hình ăn nhanh lành mạnh (healthy fast food) tập trung vào các sản phẩm tươi – ngon – tiện lợi – tốt cho sức khỏe như trái cây cắt sẵn, nước ép nguyên chất, sinh tố tươi, detox…',
        address: 'DannyGreen Lovers Phù Đổng - Quận 1 (TP.HCM))',
    },

];
const autoBiomarktItems: AccordionItem[] = [
    {
        id: 0,
        title: 'DANNYGREEN AUTO BIOMARKT',
        desc: 'Mô hình máy bán hàng tự động thông minh tại khu dân cư, để người tiêu dùng dễ dàng mua thực phẩm sạch - hữu cơ - an toàn theo cách tiện lợi, hiện đại và nhanh gọn hơn.',
        address: 'Address ...',
    },
    {
        id: 1,
        title: 'Name of location 1',
        desc: 'Mô hình máy bán hàng tự động thông minh tại khu dân cư, để người tiêu dùng dễ dàng mua thực phẩm sạch - hữu cơ - an toàn theo cách tiện lợi, hiện đại và nhanh gọn hơn.',
        address: 'Address ...',
    },
    {
        id: 2,
        title: 'Name of location 2',
        desc: 'Mô hình máy bán hàng tự động thông minh tại khu dân cư, để người tiêu dùng dễ dàng mua thực phẩm sạch - hữu cơ - an toàn theo cách tiện lợi, hiện đại và nhanh gọn hơn.',
        address: 'Address ...',
    }, {
        id: 3,
        title: 'Name of location 3',
        desc: 'Mô hình máy bán hàng tự động thông minh tại khu dân cư, để người tiêu dùng dễ dàng mua thực phẩm sạch - hữu cơ - an toàn theo cách tiện lợi, hiện đại và nhanh gọn hơn.',
        address: 'Address ...',
    }, {
        id: 4,
        title: 'Name of location 4',
        desc: 'Mô hình máy bán hàng tự động thông minh tại khu dân cư, để người tiêu dùng dễ dàng mua thực phẩm sạch - hữu cơ - an toàn theo cách tiện lợi, hiện đại và nhanh gọn hơn.',
        address: 'Address ...',
    }, {
        id: 5,
        title: 'Name of location 5',
        desc: 'Mô hình máy bán hàng tự động thông minh tại khu dân cư, để người tiêu dùng dễ dàng mua thực phẩm sạch - hữu cơ - an toàn theo cách tiện lợi, hiện đại và nhanh gọn hơn.',
        address: 'Address ...',
    },
];
export default function Page() {

    const [activeRetail, setActiveRetail] = useState<number>(0);
    const [activeLovers, setActiveLovers] = useState<number>(0);
    const [activeAutoBio, setActiveAutoBio] = useState<number>(0);

    return (
        <div className="container-fluid content">
            <section className="dg-banner-section">
                <div className="overlay">
                    <h1 className="title">DANNYGREEN RETAIL &amp; FRANCHISE</h1>
                    <p className="subtitle">Chuỗi cửa hàng bán lẻ &amp; nhượng quyền</p>
                </div>
            </section>

            <section className="dg-brand-section">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-7 text-left">
                            <p className="brand-text">
                                <strong className="text-highlight">DannyGreen Retail &amp; Franchise</strong>
                                <span className="brand-description">
                                    là đơn vị trực thuộc DannyGreen Corporation, hoạt động với sứ mệnh mang các sản phẩm tiêu dùng và chăm sóc sức khỏe chất lượng cao,
                                    an toàn với người tiêu dùng qua mô hình bán lẻ và nhượng quyền chuyên nghiệp.
                                </span>
                            </p>
                        </div>
                        <div className="col-5 text-center">

                            <img src="/images/logo_lover.png" alt="Logo 1" className="logo-item" />
                            <img src="/images/logo_dannygreen.png" alt="Logo 2" className="logo-item logo-main" />
                            <img src="/images/logo_biomarkt.png" alt="Logo 3" className="logo-item" />

                        </div>
                    </div>
                </div>
            </section>

            <section className="dg-vision-mission">
                <div className="container-fluid">
                    <div className="row info-box">
                        <div className="col-1 info-img">
                            <img className="icon" src="/images/vision.png" alt="Tầm nhìn" />
                        </div>
                        <div className="col-3 info-name">Tầm Nhìn</div>
                        <div className="col-8 info-desc">
                            DannyGreen R&amp;F mang thực phẩm sạch, hữu cơ và sản phẩm chất lượng cao, được bảo chứng bởi
                            các chứng nhận quốc tế và an toàn với sức khoẻ của người tiêu dùng thông qua hệ thống bán lẻ, nhượng quyền
                        </div>
                    </div>
                    <div className="row info-box">
                        <div className="col-1 info-img">
                            <img className="icon" src="/images/mission.png" alt="Sứ mệnh" />
                        </div>
                        <div className="col-3 info-name">Sứ Mệnh</div>
                        <div className="col-8 info-desc">
                            Trở thành hệ thống bán lẻ và nhượng quyền hàng đầu trong lĩnh vực phân phối thực phẩm sạch,
                            hữu cơ và sản phẩm chất lượng cao. Các chuỗi cửa hàng thuộc DannyGreen R&amp;F trở thành điểm trải nghiệm mua sắm bền vững cho người tiêu dùng
                        </div>
                    </div>
                    <div className="row info-box">
                        <div className="col-1 info-img">
                            <img className="icon" src="/images/value.png" alt="Giá trị cốt lỗi" />
                        </div>
                        <div className="col-3 info-name">Giá Trị Cốt Lỗi</div>
                        <div className="col-8 info-desc">
                            <div className="row">
                                <div className="col-4">
                                    <li>Chất lượng làm gốc</li>
                                </div>
                                <div className="col-4">
                                    <li>Hợp tác bền vững</li>
                                </div>
                                <div className="col-4">
                                    <li>Khách hàng là trung tâm</li>
                                </div>
                                <div className="col-4">
                                    <li>Đổi mới &amp; phát triển</li>
                                </div>
                                <div className="col-4">
                                    <li>Chuyên nghiệp &amp; tận tâm</li>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dg-outstanding-section">
                <div className="container-fluid">
                    <div className="outstanding-header">THÀNH TỰU <span> NỔI BẬT</span></div>
                    <div className="outstanding-content">
                        <div className="row">
                            <div className="col-3 row achievement-item">
                                <div className="col-4 achievement-number">8</div>
                                <div className="col-8 achievement-text">Cửa hàng DannyGreen BioMarkt</div>
                            </div>
                            <div className="col-5 row achievement-item">
                                <div className="col-4 achievement-number">50<sup>+</sup></div>
                                <div className="col-8 achievement-text">Đối Tác <br />Tin Cậy</div>
                            </div>
                            <div className="col-4 row achievement-item">
                                <div className="col-5 achievement-number">20<sup>K+</sup></div>
                                <div className="col-7 achievement-text">Khách Hàng Thân Thiết</div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-3 row achievement-item">
                                <div className="col-4 achievement-number">6</div>
                                <div className="col-8 achievement-text">Cửa hàng DannyGreen Lovers</div>
                            </div>
                            <div className="col-5 row achievement-item">
                                <div className="col-4 achievement-number">100</div>
                                <div className="col-8 achievement-text">Máy Bán Hàng <br />Tự Động DannyGreen <br /> Auto BioMarkt</div>
                            </div>
                            <div className="col-4 row achievement-item">
                                <div className="col-5 achievement-number">35<sup>K+</sup></div>
                                <div className="col-7 achievement-text">Lượt <br /> Mua Hàng <br /> Trong Năm</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dg-chain-section">
                <div className="container-fluid">
                    <div className="chain-header row">
                        <div className="col-2"></div>
                        <div className="col-8">
                            CHUỖI CỬA HÀNG TRỰC THUỘC DANNYGREEN RETAIL &amp; FRANCHISE
                        </div>
                        <div className="col-2"></div>
                    </div>
                    <div className="chain-content">
                        <div className="accordion-horizontal" id="retailAccordion">
                            {retailItems.map((item) => (
                                <div
                                    // className="accordion-item retail card-1 active" 
                                    className={clsx(`accordion-item retail card-${item.id + 1}`, {
                                        active: activeRetail === item.id,
                                    })}
                                    key={item.id}
                                    onClick={() => setActiveRetail(item.id)} >
                                    <div className="accordion-header">
                                        <div className="badge bg-light text-dark mb-2">Bán lẻ (Retail)</div>
                                        <div className="accordion-title">{item.title}</div>
                                    </div>
                                    <div className="accordion-body">
                                        <p>
                                            {item.desc}
                                        </p>
                                        <div className="accordion-img">
                                            <p className="mt-2 text-position"><i className="fa fa-map-marker" /> {item.address}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="accordion-horizontal" id="loversAccordion">
                            {loversItems.map((item) => (
                                <div
                                    // className="accordion-item retail card-1 active" 
                                    className={clsx(`accordion-item lovers card-${item.id + 1}`, {
                                        active: activeLovers === item.id,
                                    })}
                                    key={item.id}
                                    onClick={() => setActiveLovers(item.id)} >
                                    <div className="accordion-header">
                                        <div className="badge bg-light text-dark mb-2">Ăn &amp; Uống (F&amp;B)</div>
                                        <div className="accordion-title">{item.title}</div>
                                    </div>
                                    <div className="accordion-body">
                                        <p>
                                            {item.desc}
                                        </p>
                                        <div className="accordion-img">
                                            <p className="mt-2 text-position"><i className="fa fa-map-marker" /> {item.address}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="accordion-horizontal" id="autoBioAccordion">
                            {autoBiomarktItems.map((item) => (
                                <div
                                    // className="accordion-item retail card-1 active" 
                                    className={clsx(`accordion-item auto-biomarkt card-${item.id + 1}`, {
                                        active: activeAutoBio === item.id,
                                    })}
                                    key={item.id}
                                    onClick={() => setActiveAutoBio(item.id)} >
                                    <div className="accordion-header">
                                        <div className="badge bg-light text-dark mb-2">Hệ Thống Chuỗi Máy Bán Hàng Tự Động</div>
                                        <div className="accordion-title">{item.title}</div>
                                    </div>
                                    <div className="accordion-body">
                                        <p>
                                            {item.desc}
                                        </p>
                                        <div className="accordion-img">
                                            <p className="mt-2 text-position"><i className="fa fa-map-marker" /> {item.address}</p>
                                        </div>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid green-line"></div>

            <section className="dg-growth-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 header">
                            Cột Mốc Tăng Trưởng
                        </div>
                        <div className="col-2 header-img">
                            <img src="/images/down.png" />
                        </div>
                    </div>
                    <div className="grey-line"></div>
                    <div className="row growth-item">
                        <div className="col-6 growth-text">
                            Phát triển chuỗi cửa hàng đối chứng sản phẩm, tạo tiền đề cho sự phát triển Chuỗi cửa hàng DannyGreen BioMarkt
                        </div>
                        <div className="col-4"></div>
                        <div className="col-2 growth-year">2017</div>
                        <div className="col-12 growth-image">
                        </div>
                        <div className="col-12 grey-line"></div>
                    </div>

                    <div className="row growth-item">
                        <div className="col-6 growth-text">
                            Mở cửa hàng DannyGreen BioMarkt và DannyGreen Lovers đầu tiên tại Cityland, Quận 7
                        </div>
                        <div className="col-4"></div>
                        <div className="col-2 growth-year">2021</div>
                        <div className="col-12 grey-line"></div>
                    </div>

                    <div className="row growth-item">
                        <div className="col-6 growth-text">
                            Mở rộng chuỗi DannyGreen Lovers tại SC VivoCity, Quận 7
                        </div>
                        <div className="col-4"></div>
                        <div className="col-2 growth-year">2022</div>
                        <div className="col-12 grey-line"></div>
                    </div>

                    <div className="row growth-item">
                        <div className="col-6 growth-text">
                            <li style={{ listStyleType: 'none' }}>- Thành lập Công ty TNHH DannyGreen Retail &amp; Franchise để quản lý và phát triển hệ thống chuỗi cửa hàng </li>
                            <li style={{ listStyleType: 'none' }}>- Mở rộng chuỗi cửa hàng DannyGreen BioMarkt, DannyGreen Lovers tại TP.HCM và TP.Cần Thơ:</li>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-2 growth-year">2024</div>
                    </div>
                    <div className="row growth-item">
                        <div className="col-10 growth-text">
                            <div className="row">
                                <div className="col-6">
                                    <strong>DannyGreen BioMarkt</strong>
                                    <ul>
                                        <li>DannyGreen BioMarkt Phù Đổng - Quận 1</li>
                                        <li>DannyGreen BioMarkt Gò Dầu - Tân Phú</li>
                                        <li>DannyGreen BioMarkt Hưng Lợi, Cần Thơ</li>
                                        <li>DannyGreen BioMarkt Lý Nhân Tông, Bắc Ninh</li>
                                    </ul>
                                </div>
                                <div className="col-6">
                                    <strong>DannyGreen Lovers</strong>
                                    <ul>
                                        <li>DannyGreen Lovers Phù Đổng - Quận 1</li>
                                        <li>DannyGreen Lovers Gò Dầu - Tân Phú</li>
                                        <li>DannyGreen Lovers Hưng Lợi, Cần Thơ</li>
                                        <li>DannyGreen Lovers Lý Nhân Tông, Bắc Ninh</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-2 growth-year"></div>
                        <div className="col-12 grey-line"></div>
                    </div>

                    <div className="row growth-item">
                        <div className="col-6 growth-text">
                            <li style={{ listStyleType: 'none' }}>- Đẩy mạnh mở rộng chuỗi cửa hàng DannyGreen BioMarkt và DannyGreen Lovers</li>
                            <ul>
                                <li>DannyGreen BioMarkt Hoàng Văn Thụ, Cần Thơ</li>
                                <li>DannyGreen BioMarkt Midtown - Quận 7</li>
                                <li>DannyGreen Lovers Midtown - Quận 7</li>
                            </ul>
                        </div>
                        <div className="col-4"></div>
                        <div className="col-2 growth-year">4/2025</div>
                        <div className="col-12 grey-line"></div>
                    </div>
                </div>
            </section>

            <section className="dg-farming-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-5 farming-left">
                            <div className="header-text">CANH TÁC HỮU CƠ CÔNG NGHỆ CAO</div>
                            <div className="desc-text">Đảm bảo chất lượng cho dòng sản phẩm Nông Sản Tươi</div>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-5 farming-right">
                            <div className="desc-text">Sản Phẩm Đạt Chứng Nhận Hữu Cơ Việt Nam Và Quốc Tế</div>
                            <div className="row">
                                <div className="col-4 certifi-item">
                                    <img src="/images/usda.png" className="certifi-image" />
                                    <div className="certifi-name">
                                        Chứng Nhận Hữu Cơ Hoa Kỳ (USDA-NOP)
                                    </div>
                                </div>
                                <div className="col-4 certifi-item">
                                    <img src="/images/jas.png" className="certifi-image" />
                                    <div className="certifi-name">
                                        Chứng Nhận Hữu Cơ Nhật Bản (JAS)
                                    </div>
                                </div>
                                <div className="col-4 certifi-item">
                                    <img src="/images/vco.png" className="certifi-image" />
                                    <div className="certifi-name">
                                        Chứng Nhận Hữu Cơ Việt Nam (VCO)
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dg-advance-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-6 advance-left"></div>
                        <div className="col-6 advance-right">
                            <div className="desc-text">Nhà Máy Đạt Chứng Nhận Hệ Thống Quản Lý Chất Lượng Quốc Tế</div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-5 advance-left">
                            <div className="header-text">ỨNG DỤNG CÔNG NGHỆ TIÊN TIẾN</div>
                            <div className="desc-text">Vào quá trình sản xuất thực phẩm chế biến</div>
                        </div>
                        <div className="col-2"></div>
                        <div className="col-5 advance-right">
                            <div className="row">
                                <div className="col-4 certifi-item">
                                    <img src="/images/fda.png" className="certifi-image" />
                                    <div className="certifi-name">
                                        Chứng Nhận FDA Hoa Kỳ
                                    </div>
                                </div>
                                <div className="col-4 certifi-item">
                                    <img src="/images/iso9001.png" className="certifi-image" />
                                    <div className="certifi-name">
                                        Chứng Nhận ISO 9001:2015
                                    </div>
                                </div>
                                <div className="col-4 certifi-item">
                                    <img src="/images/iso22000.png" className="certifi-image" />
                                    <div className="certifi-name">
                                        Chứng Nhận ISO 22000:2018
                                    </div>
                                </div>
                                <div className="col-4 certifi-item">
                                    <img src="/images/fssc22000.png" className="certifi-image" />
                                    <div className="certifi-name">
                                        Chứng Nhận FSSC 22000
                                    </div>
                                </div>
                                <div className="col-4 certifi-item">
                                    <img src="/images/haccap.png" className="certifi-image" />
                                    <div className="certifi-name">
                                        Tiêu Chuẩn HACCAP
                                    </div>
                                </div>
                                <div className="col-4 certifi-item">
                                    <img src="/images/halal.png" className="certifi-image" />
                                    <div className="certifi-name">
                                        Tiêu Chuẩn Halal
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="dg-certify-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-7 certify-left">
                            <div className="header-text">ĐẠT CHỨNG NHẬN HÀNG VIỆT NAM CHẤT LƯỢNG CAO - CHUẨN HỘI NHẬP</div>
                            <div className="desc-text">Cho sản phẩm thực phẩm được phân phối tại DannyGreen BioMarkt</div>
                        </div>
                        <div className="col-5 certify-right">
                            <div className="row">
                                <div className="col-4"></div>
                                <div className="col-4"></div>
                                <div className="col-4 certifi-item">
                                    <img src="/images/hang_vn_clc.png" className="certifi-image" />
                                    <div className="certifi-name">
                                        Chứng Nhận Hàng Việt Nam Chất Lượng Cao
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <div className="container-fluid green-line"></div>

            <section className="dg-news-section">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-10 header">
                            NHỮNG TIN TỨC MỚI NHẤT
                        </div>
                        <div className="col-2 header-img">
                            <img src="/images/down.png" />
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}
// res.status(500).json({})