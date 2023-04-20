import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import {BuildOptions} from "./types/config";
import ReactRefreshPlugin from "@pmmmwh/react-refresh-webpack-plugin";

export const buildPlugins = (options: BuildOptions): webpack.WebpackPluginInstance[] => {
    const { paths, isDev, } = options

    const plugins = [
        new HTMLWebpackPlugin({
            template: paths.html,
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].scc',
            chunkFilename: 'css/[name].[contenthash:8].scc',
        }),
        new webpack.DefinePlugin({
            __IS_DEV__: JSON.stringify(isDev)
        })
    ]

    if (isDev) {
        plugins.push(new ReactRefreshPlugin())
        plugins.push(new webpack.HotModuleReplacementPlugin())
    }

    return plugins;
};
