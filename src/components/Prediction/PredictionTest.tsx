import React, { useState } from 'react';
import '../../styles/Imputation.css';

const Imputation: React.FC = () => {
    // 文件上传部分状态
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>('未选择文件');
    const [testResult, setTestResult] = useState<string>('');

    const handleTest = () => {
        if (!selectedFile) {
            alert('请先上传文件！');
            return;
        }

        setTestResult('预测中...');
        // 模拟测试过程
        setTimeout(() => {
            const resultText = `预测完成！\n[{38.000000‌ 38.723159 39.684275 40.299871 39.150432 40.756328 41.203194 41.892367 44.063247 42.431625 43.175829 46.000000}]`;
            setTestResult(resultText);
        }, 2000);
    };

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
                <button className="submit-button" onClick={handleTest}>
                    开始预测
                </button>
            </div>
                     {/* 测试结果显示 */}
                     <div className="result-textbox">
                    <h4>预测结果：（本模型可对时间序列之后的12个时间点的数据进行预测）</h4>
                    <textarea
                        readOnly
                        value={testResult}
                        rows={5} // 动态设置行数
                    />
                </div>

            {/* 表格和图片并列布局 */}
            <div className="result-container">
                {/* 图片 */}
                <div className="result-image">
                    <h4>预测结果折线图</h4>
                    <img
                        src="prediction.png" // 图片路径a
                        alt="误差折线图"
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                </div>
                {/* 表格 */}
                <div className="result-table">
                </div>
            </div>
        </div>
    );
};

export default Imputation;