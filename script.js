// Sample JSON Data 
const projectData = {
    "tasks": [
        {
            "task_id": 18882,
            "task_title": "Explore the world of management",
            "task_description": "As a project manager, you play an important role in leading a project through initiation, planning, execution, monitoring, controlling, and completion.",
            "assets": [
                {
                    "asset_id": 18883,
                    "asset_title": "Technical Project Management",
                    "asset_description":" Description: Story of Alignment, Scope of Agility, Specific Accountable, Staggering Approach.",
                    "asset_content": "https://www.youtube.com/embed/TiMRwri1xJ8",
                    "asset_type": "display_asset",
                    "asset_content_type": "video"
                },
                {
                    "asset_id": 18884,
                    "asset_title": "Threadbuild",
                    "asset_description": "Watch the video and thread build, and jot out key threads while watching.",
                    "asset_content": "",
                    "asset_type": "input_asset",
                    "asset_content_type": "threadbuilder"
                },
                {
                    "asset_id": 18885,
                    "asset_title": "Structure your pointers",
                    "asset_description": "Write a 400-500 word article, from your thread. Publish your understanding.",
                    "asset_content": "",
                    "asset_type": "input_asset",
                    "asset_content_type": "article"
                },
                {
                    "asset_id": 18886,
                    "asset_title": "4SA Method",
                    "asset_description": "To explore more, read more.",
                    "asset_content": "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
                    "asset_type": "display_asset",
                    "asset_content_type": "article"
                }
            ]
        }
    ]
};
// Toggle Journey Board visibility
document.getElementById('board-collapsed').addEventListener('click', function () {
    const expandedBoard = document.getElementById('board-expanded');
    if (expandedBoard.style.display === 'none') {
        expandedBoard.style.display = 'block';
    } else {
        expandedBoard.style.display = 'none';
    }
});
// Render Assets 
function renderAssets(assets) {
    const assetContainer = document.getElementById('asset-container');
    assets.forEach(asset => {
        const assetElement = document.createElement('div');
        assetElement.classList.add('asset');
        const assetTitle = document.createElement('h3');
        assetTitle.innerText = asset.asset_title;
        const assetDescription = document.createElement('p');
        assetDescription.innerText = asset.asset_description;
        if (asset.asset_content_type === "video") {
            const videoElement = document.createElement('iframe');
            videoElement.src = asset.asset_content;
            videoElement.width = "100%";
            videoElement.height = "315";
            assetElement.appendChild(videoElement);
        } else if (asset.asset_content_type === "article") {
            const articleLink = document.createElement('a');
            articleLink.href = asset.asset_content;
            articleLink.target = "_blank";
            // articleLink.innerText = "Read more here";
            assetElement.appendChild(articleLink);
        } else if (asset.asset_content_type === "threadbuilder") {
            const inputArea = document.createElement('textarea');
            inputArea.placeholder = "Write your thoughts here...";
            assetElement.appendChild(inputArea);
        }

        assetElement.appendChild(assetTitle);
        assetElement.appendChild(assetDescription);
        assetContainer.appendChild(assetElement);
    });
}
// Load Assets 
const taskAssets = projectData.tasks[0].assets;
renderAssets(taskAssets);

// Toggle Journey Board States
document.getElementById('board-collapsed').addEventListener('click', () => {
    document.getElementById('board-collapsed').style.display = 'none';
    document.getElementById('board-expanded').style.display = 'block';
});
document.getElementById('board-expanded').addEventListener('click', () => {
    document.getElementById('board-expanded').style.display = 'none';
    document.getElementById('board-collapsed').style.display = 'block';
});
