import React, { useState } from 'react';
import '../../styles/Imputation.css';

const Imputation: React.FC = () => {
    // 文件上传部分状态
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>('未选择文件');

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
    };

    return (
        <div className="section-card">
            <h2>时间序列预测功能</h2>

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
                    <button onClick={handleUpload} className="upload-button-custom">
                        上传
                    </button>
                </div>
            </div>

            {/* 第三部分：操作按钮 */}
            <div className="button-group" style={{ marginTop: '20px' }}>
                <button className="submit-button" onClick={handleImputation}>
                    开始预测
                </button>
            </div>
        </div>
    );
};

export default Imputation;