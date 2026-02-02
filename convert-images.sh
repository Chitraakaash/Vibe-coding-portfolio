#!/bin/bash

# Portfolio Image Optimization Script
# Converts PNG/JPG images to WebP format for better performance

echo "==================================="
echo "Portfolio Image Converter to WebP"
echo "==================================="
echo ""

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
    echo "❌ ImageMagick not found. Please install it first:"
    echo ""
    echo "macOS:     brew install imagemagick"
    echo "Ubuntu:    sudo apt-get install imagemagick"
    echo "Windows:   Download from https://imagemagick.org/script/download.php"
    echo ""
    exit 1
fi

# Create images directory if it doesn't exist
mkdir -p assets/images

# Quality setting (85 is a good balance between size and quality)
QUALITY=85

# Counter for converted images
COUNT=0

echo "Converting images to WebP format (quality: $QUALITY)..."
echo ""

# Convert all PNG and JPG files in current directory
for img in *.png *.jpg *.jpeg *.PNG *.JPG *.JPEG 2>/dev/null; do
    if [ -f "$img" ]; then
        # Get filename without extension
        filename="${img%.*}"
        
        # Convert to WebP
        convert "$img" -quality $QUALITY "assets/images/${filename}.webp"
        
        if [ $? -eq 0 ]; then
            # Get file sizes
            original_size=$(du -h "$img" | cut -f1)
            new_size=$(du -h "assets/images/${filename}.webp" | cut -f1)
            
            echo "✓ Converted: $img → ${filename}.webp"
            echo "  Original: $original_size | WebP: $new_size"
            echo ""
            
            COUNT=$((COUNT + 1))
        else
            echo "✗ Failed to convert: $img"
            echo ""
        fi
    fi
done

if [ $COUNT -eq 0 ]; then
    echo "No images found to convert."
    echo "Place your PNG or JPG files in the same directory as this script."
else
    echo "==================================="
    echo "✓ Successfully converted $COUNT image(s)"
    echo "==================================="
    echo ""
    echo "Your WebP images are in: assets/images/"
    echo ""
    echo "Next steps:"
    echo "1. Verify images display correctly in your browser"
    echo "2. Delete original PNG/JPG files if satisfied"
    echo "3. Commit and push to GitHub"
fi
