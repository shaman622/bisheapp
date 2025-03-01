import React, { useState } from 'react';
import '../../styles/Imputation.css';

const Imputation: React.FC = () => {
    // 文件上传部分状态
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>('未选择文件');
    const [maxImputationLength, setMaxImputationLength] = useState<number>(10); // 最大插补长度

    // 选项部分状态
    const [options, setOptions] = useState<{
        uploadAdjMatrix: boolean;
        adaptiveImputation: boolean;
    }>({
        uploadAdjMatrix: false,
        adaptiveImputation: false,
    });

    // 结果部分状态
    const [downloadUrl, setDownloadUrl] = useState<string>('');

    // 处理文件选择
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            setSelectedFile(file);
            setFileName(file.name);
        }
    };

    // 处理文件上传
    const handleUpload = () => {
        if (selectedFile) {
            console.log('上传文件:', selectedFile.name);
            alert(`文件 "${selectedFile.name}" 上传成功！`);
        } else {
            alert('请先选择一个文件！');
        }
    };

    // 处理插补
    const handleImputation = () => {
        if (!selectedFile) {
            alert('请先上传文件！');
            return;
        }
        // 模拟插补过程
        setTimeout(() => {
            // 生成一个模拟的下载链接
            const fakeData = new Blob(['模拟插补结果数据'], { type: 'application/octet-stream' });
            setDownloadUrl(URL.createObjectURL(fakeData));
        }, 2000);
    };

    // 处理下载文件
    const handleDownload = () => {
        if (!downloadUrl) {
            alert('没有可下载的文件！');
            return;
        }

        // 生成默认文件名：系统时间.pkl
        const now = new Date();
        const formattedDate = `${now.getFullYear()}${(now.getMonth() + 1)
            .toString()
            .padStart(2, '0')}${now.getDate().toString().padStart(2, '0')}_${now
            .getHours()
            .toString()
            .padStart(2, '0')}${now.getMinutes().toString().padStart(2, '0')}${now
            .getSeconds()
            .toString()
            .padStart(2, '0')}.pkl`;

        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = formattedDate; // 设置默认文件名
        link.click();
        URL.revokeObjectURL(downloadUrl); // 释放内存
    };

    return (
        <div className="section-card">
            <h2>插补功能</h2>

            {/* 第一部分：文件上传 */}
            <div className="file-upload-row">
                <h3>上传不规则时间序列文件</h3>
                <div className="file-upload-container">
                    <label htmlFor="file-input" className="file-label">
                        选择文件
                    </label>
                    <input
                        id="file-input"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <span className="file-name">{fileName}</span>
                    <button onClick={handleUpload} className="upload-button" disabled={!options.uploadAdjMatrix}>
                        上传
                    </button>
                </div>
            </div>

            {/* 第二部分：选项 */}
            
            <div className="file-upload-row">
            <h3>选择邻接矩阵文件</h3>
                <div className="file-upload-container">
                <label htmlFor="file-input" className="file-label">
                        选择文件
                    </label>
                    <input
                        id="adj-matrix-file-input"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: 'none' }}
                    />
                    <span className="file-name">{fileName}</span>
                    <button onClick={handleUpload} className="upload-button">
                        上传
                    </button>
                </div>
            </div>
            <div className="options-checkbox">
                <label>
                    <span>最大插补长度：</span>
                    <input
                        type="number"
                        id="maxImputationLength"
                        name="maxImputationLength"
                        value={maxImputationLength}
                        onChange={(e) => setMaxImputationLength(parseInt(e.target.value))}
                        style={{ marginLeft: '10px', width: '60px' }}
                    />
                </label>
                <p className="option-description">
                    由用户决定是否对长序列连续缺失值进行插补。
                </p>
            </div>

            {/* 第三部分：操作按钮 */}
            <div className="button-group" style={{ marginTop: '20px' }}>
                <button className="submit-button" onClick={handleImputation}>
                    开始插补
                </button>
                <button className="submit-button" onClick={handleDownload} style={{ marginLeft: '10px' }}>
                    下载文件
                </button>
            </div>
        </div>
    );
};

export default Imputation;