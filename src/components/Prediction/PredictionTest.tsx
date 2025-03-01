import React, { useState } from 'react';
import '../../styles/Imputation.css';

const Imputation: React.FC = () => {
    // 文件上传部分状态
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [fileName, setFileName] = useState<string>('未选择文件');
    const [testResult, setTestResult] = useState<string>('');

    const handleTest = () => {
        setTestResult('测试中...');
        // 模拟测试过程
        setTimeout(() => {
            const resultText = `测试完成！
            [validation_eval {"MAE": 0.5938144329896907, "MSE": 1.2003598484848485, "MRE": 0.9381443298969073,}, stop_epoch:113]`;
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
                     {/* 测试结果显示 */}
                     <div className="result-textbox">
                    <h4>预测结果：</h4>
                    <textarea
                        readOnly
                        value={testResult}
                        rows={5} // 动态设置行数
                    />
                </div>

            {/* 表格和图片并列布局 */}
            <div className="result-container">
                {/* 表格 */}
                <div className="result-table">
                    <h4>测试集预测结果</h4>
                    <table>
                        <thead>
                            <tr>
                                <th>MAE</th>
                                <th>MSE</th>
                                <th>MRE</th>
                                <th>early_stopping_epoch</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0.49</td>
                                <td>1.20</td>
                                <td>0.93</td>
                                <td>113</td>
                            </tr>
                        </tbody>
                    </table>
                </div>


                {/* 图片 */}
                <div className="result-image">
                    <h4>不同迭代次数误差折线图</h4>
                    <img
                        src="result.png" // 图片路径a
                        alt="误差折线图"
                        style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Imputation;